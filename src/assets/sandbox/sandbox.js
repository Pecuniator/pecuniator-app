try {
  importScripts('./build/camt.js');
} catch(e) {
  console.error('Import failed', e);
}

onmessage = function(e) {
  const data = e.data;
  console.log('Worker: Message received from main script', data);

  eval(data.script);
}