/*
This file will run before any HTML is executed to make sure the user is logged in
 */

Parse.initialize("lvKnEQfyaRezqqgnktnDZhTZQP3Yf9cpJV1lDXzf",
    "nKE6VI1LruKg7LMkpRmNin4IqldZfIYvE7KyyKCd");

if(Parse.User.current() == null)
{
    alert("Please login");
    window.location.replace("index.html");
}