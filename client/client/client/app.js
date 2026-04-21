async function register(){
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const pin = document.getElementById("pin").value;

  const res = await fetch("/api/register",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name,mobile,pin})
  });

  const data = await res.json();
  alert(data.message);
}
