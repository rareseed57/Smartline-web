<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="icon.svg">
<title> Smartline </title>
<link href="stile.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="script_base.js"></script>
</head>
<body id="changelog" style="font-family: montserrat;
              color:rgb(25,25,25);
            ">
  
  <div id="div_toolbar">
    <header>
      <h1><a href="smartline.html">Smartline</a></h1>
    </header>
    
    <div class="container" onclick="menuToggle(this);" id="menubutton">
       <div class="bar1"></div>
       <div class="bar3"></div>
    </div>
    
    <nav> 
      <ul>
        <li class="navitem"><a href="contattaci.html">CONTATTACI</a></li>
        <li class="navitem"><a href="#changelog">CHANGELOG</a></li>
        <li class="navitem"><a href="faq.html">FAQ</a></li>
        <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
      </ul>
       <div class="verticalnavbar">
       <div class="dropdown">
        <button class="dropbtn">
          <i class="fa fa-caret-down"></i>
        </button>
          <div class="dropdown-content" id="dropdown-content">
            <a href="contattaci.html">CONTATTACI</a>
            <a href="#changelog" onclick='menuToggle(document.getElementById("menubutton"));'>CHANGELOG</a></li>
            <a href="faq.html">FAQ</a></li>
           </div>
        </div>
       </div>
    </nav>
  </div>
 
  <div id="flexbox" onclick='menuClose(document.getElementById("menubutton"));'>
    
    <div class="section"  style="font-size: calc(20px + 3vw); padding-top: calc(4% + 80px); opacity:1">
      CHANGELOG
    </div>
    
<?php
    // connessione a MySQL con mysqli_connect()

    // definizione delle variabili
    $host = "localhost";
    $user = "smartline@localhost";
    $pass = "";
    $db = "my_smartline"; 
 
// connessione al DBMS
   $conn = @mysqli_connect($host, $user, $pass); 
   if ($conn)
   {	   
    //echo ("Connessione al DBMS riuscita. "); 
   }	  
   if (!$conn) 
   {
     //die ("Connessione al DBMS non riuscita "); 
   }	 

   // selezione e connessione al Database  
   $usodb=mysqli_select_db($conn, $db);
   if ($usodb)
	 {	   
    //echo ("Selezione del Database richiesto e connessione allo stesso riuscita. ");
   }	   
  if (!$usodb)
   {
     //die ("Selezione del Database richiesto non riuscita. "); 
   }
   
   
   if($usodb && $conn)
   {
    $query="SELECT * FROM changelog ORDER BY versione DESC";
    
    $result = $conn->query($query);

    if ($conn && ($result->num_rows > 0)) 
    {
        // output data of each row
        while($row = $result->fetch_assoc()) 
        {
          echo
          ('
          <div class="section" style="opacity:1">
          <div class="div_right">
          <div class="ptitle" style="margin-top:0;"> Versione 
          ');
          echo $row["versione"] ;
          echo
          ('
          </div><br>
          ');
          echo $row["descrizione"];
          echo
          ('
          </div>
          </div>
          ');
        }
    }
    
    else
    {
       echo
          ('
            <div class="section" style="opacity:1">
             <div class="div_right">
             <div class="ptitle" style="margin-top:0;"> error </div><br>
             error
           </div>
         </div>
        ');
    }
   }
?>
  
  <footer> <br> 
     <div class="ptitle2" style="color:rgb(220,220,220);">SEGUICI SUI NOSTRI CANALI SOCIAL!</div><br> <br>
     <div class="div_social">
      <img src="img/facebook.png"
      width="20%">
      <img src="img/twitter.png"
      width="20%">
      <img src="img/instagram.png"
      width="20%">
    </div> 
  </footer>
</body>
</html>