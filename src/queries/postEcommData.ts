async function postEcommData(){
    let data = {}

    const response = await fetch(`https://api.ecomm-data.com/recruit/home`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if(!res.ok && res.status !== 200) throw Error(res.statusText);

        return res;
    })
    
    return response.json();
}

export default postEcommData;
