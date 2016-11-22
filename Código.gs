function emailOnFormSubmit(e) {
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var fila = sheet.getActiveCell().getRow();
  
  var nombre = sheet.getRange("B" + fila).getValue();
  var apes = sheet.getRange("C" + fila).getValue();
  var cuenta = sheet.getRange("L" + fila).getValue();
  var eleccion = sheet.getRange("K" + fila).getValue();
  var Email = sheet.getRange("E" + fila).getValue();
  
  var alpha = "https://www.youtube.com/watch?v=0_wssd7XFZs";
  var s6 = "https://www.youtube.com/watch?v=ROo0rFTAJm4";
  var s7 = "https://www.youtube.com/watch?v=IqXeuN3NpjE";
  var s7edge = "https://www.youtube.com/watch?v=7s-krvfk524";
  
  var mensaje;
  
  
  
  
  if(eleccion == "Galaxy Alpha + 300e"){
    mensaje = "Hola "+nombre+" "+apes+" , esperamos que disfrutes mucho el terminal que has elegido como sustitución de la bomba note 7 "
    +" En el siguiente enlace te compartimos un video sobre las caracteristicas y funciones del terminal que has escogido: \n"
    +" "
    +" " +alpha
    +"\n "
    +"  En el siguiente enlace  le adjuntamos una opcion para que pueda comprar accesorios y recibirlos junto a su terminal, al acabar el proceso recibirá una factura de todo lo adquirido \n "
    +" https://docs.google.com/a/campuscamara.es/forms/d/e/1FAIpQLSfYmvpAX2sXz-ruEzlTNxsMk4i6IGZz66ViNJuw2tfUhaqJCA/viewform"
    +" "
    + "\n \n Atentamente Samsung España."
    
    
    }//FinSi
  
  if(eleccion == "S6 + 150e"){
    mensaje = "Hola "+nombre+" "+apes+" , esperamos que disfrutes mucho el terminal que has elegido como sustitución de la bomba note 7 "
    +" En el siguiente enlace te compartimos un video sobre las caracteristicas y funciones del terminal que has escogido: \n "
    +" "
    +" " +s6
    +" "
    +"  En el siguiente enlace  le adjuntamos una opcion para que pueda comprar accesorios y recibirlos junto a su terminal, al acabar el proceso recibirá una factura de todo lo adquirido \n "
    +" https://docs.google.com/a/campuscamara.es/forms/d/e/1FAIpQLSfYmvpAX2sXz-ruEzlTNxsMk4i6IGZz66ViNJuw2tfUhaqJCA/viewform"
    +"\n "
    + "\n \n Atentamente Samsung España."
    
    
    }//FinSi
  
  if(eleccion == "S7 + 50e"){
    mensaje = "Hola "+nombre+" "+apes+" , esperamos que disfrutes mucho el terminal que has elegido como sustitución de la bomba note 7 "
    +" En el siguiente enlace te compartimos un video sobre las caracteristicas y funciones del terminal que has escogido: \n "
    +" "
    +" " +s7
    +" "
    +" \n En el siguiente enlace  le adjuntamos una opcion para que pueda comprar accesorios y recibirlos junto a su terminal, al acabar el proceso recibirá una factura de todo lo adquirido \n "
    +" https://docs.google.com/a/campuscamara.es/forms/d/e/1FAIpQLSfYmvpAX2sXz-ruEzlTNxsMk4i6IGZz66ViNJuw2tfUhaqJCA/viewform"
    +" "
    + "\n \n Atentamente Samsung España."
    
    
    }//FinSi
  
   if(eleccion == "S7 Edge"){
    mensaje = "Hola "+nombre+" "+apes+" , esperamos que disfrutes mucho el terminal que has elegido como sustitución de la bomba note 7 "
    +" En el siguiente enlace te compartimos un video sobre las caracteristicas y funciones del terminal que has escogido: \n "
    +" "
    +" " +s7edge
    +"\n "
    +" En el siguiente enlace  le adjuntamos una opcion para que pueda comprar accesorios y recibirlos junto a su terminal, al acabar el proceso recibirá una factura de todo lo adquirido \n "
    +" https://docs.google.com/a/campuscamara.es/forms/d/e/1FAIpQLSfYmvpAX2sXz-ruEzlTNxsMk4i6IGZz66ViNJuw2tfUhaqJCA/viewform"
    +" "
    + "\n \n Atentamente Samsung España."
    
    
    }//FinSi
  
  //Correo
  
  //Enviar email
  GmailApp.sendEmail(Email, "Información Terminal", mensaje);
  
  
}//FinFunction
