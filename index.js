const options = {
    method: 'GET',
    url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
    params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
    }
  };

  const fetchIpInfo = ip => {
    return fetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation${ip}`,options)
    .then(res => res.json())
    .catch(err => console.error(err))
  }

const $ = selector => document.querySelector(selector)
const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async(event)=>{
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy','true')

    const ipInfo = await fetchIpInfo(value)
    
    if(ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})