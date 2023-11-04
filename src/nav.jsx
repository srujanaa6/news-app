import React from "react";

function nav()
{
return(
    <div>
        <nav class="navbar navbar-expand-md  ">
  <a class="navbar-brand" href="#">DailyNewz</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-primary my-4 my-sm-1" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
)
}

export default nav;