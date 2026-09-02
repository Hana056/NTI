
//Task 1
import {welcomeUserName} from "./Day9_module.js";
console.log(welcomeUserName("Hana"));

import {userAge} from "./Day9_module.js";
console.log(userAge(21));

import userData from "./Day9_module.js";
console.log("City of residence",userData.cityOfResidence);
console.log("Profession",userData.proffession);
userData.advice();

//Task 2

const URL = "https://jsonplaceholder.typicode.com/posts";

const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");

const output = document.getElementById("output");

// GET
getBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", URL);

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const data = JSON.parse(xhr.responseText);

            output.innerHTML = "";

            data.slice(0, 10).forEach(function (post) {

                output.innerHTML += `
                    <div class="card">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        <small>ID: ${post.id}</small>
                    </div>
                `;

            });

        } else {
            output.innerHTML = "Error: " + xhr.status;
        }

    });

    xhr.addEventListener("error", function () {
        output.innerHTML = "Network Error";
    });

    xhr.send();

});


// POST
postBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open("POST", URL);

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const data = JSON.parse(xhr.responseText);

            output.innerHTML = `
                <div class="card">
                    <h3>New Post Created</h3>
                    <p>${data.title}</p>
                    <p>${data.body}</p>
                    <small>ID: ${data.id}</small>
                </div>`;

        } else {
            output.innerHTML = "Error: " + xhr.status;
        }

    });

    xhr.addEventListener("error", function () {
        output.innerHTML = "Network Error";
    });


    const newPost = {
        title: "My New Post",
        body: "This post was created using XHR.",
        userId: 1
    };

    xhr.send(JSON.stringify(newPost));

});


// PUT
putBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open("PUT", `${URL}/1`);

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const data = JSON.parse(xhr.responseText);

            output.innerHTML = `
                <div class="card">
                    <h3>Post Updated</h3>
                    <p>${data.title}</p>
                    <p>${data.body}</p>
                    <small>ID: ${data.id}</small>
                </div>`;

        } else {
            output.innerHTML = "Error: " + xhr.status;
        }

    });

    xhr.addEventListener("error", function () {
        output.innerHTML = "Network Error";
    });


    const updatedPost = {
        id: 1,
        title: "Updated Post",
        body: "This post was updated using XHR.",
        userId: 1
    };

    xhr.send(JSON.stringify(updatedPost));

});


// DELETE
deleteBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open("DELETE", `${URL}/1`);

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {
            output.innerHTML = `
                <div class="card">
                    <h3>Post Deleted</h3>
                    <p>Post with ID 1 was deleted successfully.</p>
                </div> `;

        } else {
            output.innerHTML = "Error: " + xhr.status;
        }

    });

    xhr.addEventListener("error", function () {
        output.innerHTML = "Network Error";
    });

    xhr.send();

});
