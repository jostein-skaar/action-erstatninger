import * as replace from 'replace-in-file';

function sokOgErstatt(sok: string, erstatt: string, filer: string | string[], dryRun = false): number {
  let erstattEndelig = erstatt;
  if (sok === '{VERSJON}') {
    erstattEndelig = erstatt.replace(/^v(.*).0$/, '$1');
    console.log(`Spesialtilfelle {VERSJON}, bruker ${erstattEndelig} i stedet for ${erstatt}`);
  }

  console.log('filer', filer);

  const regex = new RegExp(`${sok}`, 'g');
  const konfig = {
    files: filer,
    from: regex,
    to: erstattEndelig,
    countMatches: true,
    dry: dryRun,
  };

  const resultater = replace.sync(konfig);

  if (dryRun === true) {
    return resultater.reduce((a, b) => a + (b.numMatches ?? 0), 0);
  }

  const endredeFiler = resultater.filter((result) => result.hasChanged).map((result) => result.file);

  console.log(`Endrede filer: ${endredeFiler}`);

  return resultater.reduce((a, b) => a + (b.numReplacements ?? 0), 0);
}

export default sokOgErstatt;
