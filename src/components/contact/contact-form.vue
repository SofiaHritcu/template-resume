<template>
<!-- contact form -->
<div class="login-box">
    <h2>Get In Touch</h2>
    <form @submit.prevent="onFormSubmit">
        <div class="user-box">
            <input type="text" name="first-name" required="">
            <label>First name</label>
        </div>
         <div class="user-box">
            <input type="text" name="last-name" required="">
            <label>Last name</label>
        </div>
        <div class="user-box">
            <input type="email" name="email" required="">
            <label>Email</label>
        </div>
        <div class="user-box">
            <textarea rows="10" cols="" name="" form="usrform" required="" aria-required="true" placeholder="Enter your message">

            </textarea>
        </div>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
        </a>
    </form>
</div>
</template>

<script>
export default {
    name: 'Contact_form',

    props: {
        description_contact: String,
    },
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(#141e30, #243b55);
}

.login-box {
    position: relative;
    top: 40%;
    left: 50%;
    width: 600px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: #3366cc;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
}

.login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
}

.login-box .user-box {
    position: relative;
}

.login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}

.login-box .user-box textarea {
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #292929;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #9c9c9c;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
}

.login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
}

.login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
}

.login-box a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
        0 0 25px #03e9f4,
        0 0 50px #03e9f4,
        0 0 100px #03e9f4;
}

.login-box a span {
    position: absolute;
    display: block;
}

.login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s
}

@keyframes btn-anim2 {
    0% {
        top: -100%;
    }

    50%,
    100% {
        top: 100%;
    }
}

.login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s
}

@keyframes btn-anim3 {
    0% {
        right: -100%;
    }

    50%,
    100% {
        right: 100%;
    }
}

.login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s
}

@keyframes btn-anim4 {
    0% {
        bottom: -100%;
    }

    50%,
    100% {
        bottom: 100%;
    }
}

/* animated text area */

textarea {
    transition: all .5s ease-in-out;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    width: 100%;
}

textarea:focus {
    box-shadow: 0 0 20px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
}

@media only screen and (max-width: 640px) {
    .login-box {

        width: 400px;

    }
}
</style>
