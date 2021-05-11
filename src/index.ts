import * as core from '@actions/core';
import * as github from '@actions/github';
import sokOgErstatt from './sok-og-erstatt';

try {
  const sok = core.getInput('sok');
  const erstatt = core.getInput('erstatt');
  const filer = core.getInput('filer');
  const dryRun = core.getInput('dry-run') === 'true';
  console.log(`Skal erstatte ${sok} med ${erstatt}, i følgende filer ${filer}`);

  console.log(`Er dry-run: ${dryRun}`);
  console.log('Test: Versjon er {VERSJON}.');

  if (!sok || !erstatt || !filer) {
    console.error('Mangler sok, erstatt og/eller filer.');
  } else {
    const antallFiler = sokOgErstatt(sok, erstatt, filer, dryRun);
    console.log(`Antall endrede filer: ${antallFiler}`);
    core.setOutput('antall-filer', antallFiler);
  }

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
