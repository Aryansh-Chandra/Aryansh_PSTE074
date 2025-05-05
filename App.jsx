import { useRef, useState } from "react";
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
const schema = mongoose.schema ;
function Form({ action }) {
    async function getData() {
        const url = "https://example.org/products.json";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error(error.message);
        }
      }








}

  

  