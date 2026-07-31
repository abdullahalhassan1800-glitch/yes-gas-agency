const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzgvb5Zv4KVLEDKyhwuCN_AfQDXYz2rjN3PU5XC9j2ZJwg1y-HerFAfORczdzF5BDIQ/exec'

export async function submitToSheet({ name, phone, service, area, problem, source }) {
  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ name, phone, service, area, problem, source }),
    })
    return true
  } catch {
    return false
  }
}
