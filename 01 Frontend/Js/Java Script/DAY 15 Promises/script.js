// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((response)=>{
//     // return response; -->> constains MetaData(Including Actuall JSON Data)
//     return response.json();

// })
// p2.then((data)=>{
//        console.log(data);
// })


//             // setTimeout(()=>{
//             //     console.log(p3)
//             // },5000)


// Actual Learning From Promises

            const parent = document.getElementById("imgTag");
            fetch("https://api.github.com/users")
                .then((response) => {
                    if(!response.ok){  // thsi block throw the error to Catch block
                        throw new Error("Please Check Your Internet or  Entered Link is NOT Active")
                    }
                    console.log(response.headers.get("x-ratelimit-remaining"));
                    console.log(response.status);
                    return response.json();
                })
                .then((data) => {

                    for (let i = 0; i < data.length; i++) {
                        // const parent = document.getElementById("imgTag");
                        console.log(parent);
                        const img_Data = document.createElement("img");
                        img_Data.style.height = "100px";
                        img_Data.style.width = "100px";
                        img_Data.src = data[i].avatar_url;
                        parent.append(img_Data)
                    }
                })
                .catch((error)=>{
                    // error_info.style.color = "white";
                    parent.textContent = error.message
                    console.log(error_info)

                    // "Failed to Fetch DATA \n *Please Check Your Internet\n Your Entered Link is NOT Active";

                })







// const parent = document.getElementById("imgTag");
// fetch("https://api.github.com/users")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {

//         for (let i = 0; i < data.length; i++) {
//             const img_Data = document.createElement("img");
//             img_Data.style.height = "100px";
//             img_Data.style.width = "100px";
//             img_Data.src = data[i].avatar_url;
//             // parent.append(img_Data);


//             const card = document.createElement('div');
//             card.style.cssText = `
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background: #161b22;
//             border: 1px solid #66696c;
//             border-radius: 12px;
//             padding: 1rem;
//             cursor: pointer;
//             transition: transform 0.2s;
//             `;
//             img_Data.style.cssText = "width:70px;height:70px;border-radius:50%;border:2px solid #30363d;";
//             card.append(img_Data);
//             card.onclick = () => window.open('https://github.com/' + data[i].login);
//             parent.append(card);
//         }
//     })


