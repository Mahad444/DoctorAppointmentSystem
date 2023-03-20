import { useState,CSSProperties } from "react";
import Cliploader  from "react-spinners/ClipLoader";


import React from 'react'

function Spinners() {
  return (
    <div class="d-flex justify-content-center spinners">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
  )

}

export default Spinners
