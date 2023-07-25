var Validation =function(){
  this.kiemTraRong=function(value,id)
  {
      if(value.trim()==="")
      {
          document.getElementById(id).style.borderColor="red";
          return false;
      }
      document.getElementById(id).style.borderColor="green";
      return true;
  }

  this.kiemTraEmail=function(value)
  {
      const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value.toLowerCase());
  }

  this.kiemTraNumber=function(value)
  {
      const re=/^\d+$/;
      if(re.test(value) && value.length>8)
      {
          return true;
      }
      return false;
  }

  this.kiemTraGiaTri=function(value)
  {
      if(value<0||value>10)
      {
          return false;
      }
      return true;
  }

}