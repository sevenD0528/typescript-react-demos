import React, { Component } from 'react'


const myComponents = {
    DatePicker: function(props) {
        return <div>Imagine a {props.color} datepicker here.</div>;
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />;
}