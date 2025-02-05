const axios = require('axios');
const fs = require('fs');

const versions = [];

async function listVersions(next) {
  const url = next || `https://api.github.com/repos/OpenFn/adaptors/tags`;

  return axios.get(url).then(response => {
    const { headers, data } = response;

    versions.push(...data);

    const { link } = headers;
    const nextLink = link.split(',').find(link => link.includes('next'));

    if (nextLink) {
      const newUrl = nextLink.substring(
        nextLink.indexOf('<') + 1,
        nextLink.lastIndexOf('>')
      );
      return listVersions(newUrl);
    }
  });
}

async function loadAdaptorsDocs() {
  const apiUrl =
    'https://raw.githubusercontent.com/OpenFn/adaptors/docs/docs/docs.json';

  console.log('Loading adaptors docs from OpenFn/adaptors');
  return axios.get(apiUrl).then(function (response) {
    console.log('Done ✓');
    const docs = response.data;

    console.log(
      'Producing docs for:',
      docs.map(x => x.name)
    );

    return docs;
  });
}

const filePaths = [];

function pushToPaths(name) {
  filePaths.push({
    name: name,
    docsId: `packages/${name}-docs`,
    readmeId: `packages/${name}-readme`,
    changelogId: `packages/${name}-changelog`,
    configurationSchemaId: `packages/${name}-configuration-schema`,
  });
}

function generateJsDoc(a) {
  return `---
title: ${a.name}@${a.version}
id: ${a.name}-docs
keywords:
  - adaptor
  - ${a.name}
  ${a.functions.length > 0 ? '- ' : ''}${a.functions.join('\r\n  - ')}
---

${JSON.parse(a.docs)}`;
}

function generateChangelog(a) {
  return `---
title: ${a.name} changelog
id: ${a.name}-changelog
keywords:
  - adaptor
  - changelog
  - ${a.name}
---

# Changelog for the ${a.name} adaptor

${JSON.parse(a.changelog)}`;
}

function generateReadme(a) {
  return `---
title: ${a.name} developer readme
id: ${a.name}-readme
keywords:
  - adaptor
  - readme
  - ${a.name}
---

# ${a.name} Adaptor developer README.md

Source: https://github.com/OpenFn/adaptors/tree/main/packages/${a.name}

${JSON.parse(a.readme)}`;
}

const sampleConfiguration = json => {
  let { properties } = json;

  const conf = {};
  if (properties) {
    Object.keys(properties).forEach((key, index) => {
      conf[key] = 'Someting';
      conf[key] =
        Array.isArray(properties[key]['examples']) &&
        `${properties[key]['examples'][0]}`;

      return conf;
    });
  }
  return '```json \n' + JSON.stringify(conf, null, 4) + '\n```';
};

function generateConfigurationSchema(a) {
  return `---
title: Config for ${a.name}
id: ${a.name}-configuration-schema
keywords:
  - adaptor
  - configuration-schema
  - ${a.name}
---

${configurationPageBody(a)}
`;
}

function configurationPageBody(a) {
  if (typeof a['configuration-schema'] == 'string') {
    return `No configuration schema has been defined for the ${a.name} adaptor.`;
  }
  return `
  Jobs that use the \`${a.name}\` adaptor may require authentication. A
  "credential" for the \`${a.name}\` adaptor will follow the schema below. When
  using the CLI, you can set up your own \`state.configuration\` by using the
  sample below.

  ## Sample Configuration

  Paste this into the \`configuration\` key of your \`state.json\` file and
  modify the values to run jobs locally.
  
  ${displaySchema(a['configuration-schema'])}

  ## Full Schema

  The full configuration schema describes each attribute of the credential and
  notes those that are required.

  ${displaySchemaFullSchema(a['configuration-schema'])}
  `;
}

function displaySchema(schema) {
  if (typeof schema == 'string') return schema;
  return sampleConfiguration(schema);
}

function displaySchemaFullSchema(schema) {
  if (typeof schema == 'string') return schema;
  return '```json \n' + JSON.stringify(schema, null, 4) + '\n```';
}

module.exports = function (context, { apiUrl }) {
  return {
    name: 'adaptors',
    extendCli(cli) {
      cli
        .command('generate-adaptors')
        .description('Generate documentation for OpenFn adaptors')
        .action(async () => {
          fs.existsSync('./adaptors/packages') ||
            fs.mkdirSync('./adaptors/packages');

          console.log('Getting version list...');
          await listVersions();

          console.log(`Found ${versions.length} monorepo versions.`);

          fs.writeFileSync(
            './adaptors/packages/versions.json',
            JSON.stringify(versions, null, 2)
          );

          const adaptors = await loadAdaptorsDocs();

          console.log('Generating adaptors docs via JSDoc...');

          adaptors.map(a => {
            const docsBody = generateJsDoc(a);
            const readmeBody = generateReadme(a);
            const changelogBody = generateChangelog(a);

            const configurationSchemaBody = generateConfigurationSchema(a);

            pushToPaths(a.name);

            fs.writeFileSync(`./adaptors/packages/${a.name}-docs.md`, docsBody);
            fs.writeFileSync(
              `./adaptors/packages/${a.name}-readme.md`,
              readmeBody
            );
            fs.writeFileSync(
              `./adaptors/packages/${a.name}-changelog.md`,
              changelogBody
            );
            fs.writeFileSync(
              `./adaptors/packages/${a.name}-configuration-schema.md`,
              configurationSchemaBody
            );
          });
          console.log('Done ✓');

          console.log('Creating sidebar paths...');

          fs.writeFileSync(
            './adaptors/packages/publicPaths.json',
            JSON.stringify(filePaths, null, 2)
          );

          console.log('Done ✓');
        });
    },
  };
};
