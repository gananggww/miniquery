class SweetSelector {
  static select(e){
    return e[0]=="#" ? document.querySelector(e) : document.querySelectorAll(e)
  }
}
class DOM {
    static hide(e){
      let el = document.querySelectorAll(e)
      el.forEach(element =>{
        element.style.display ="none"
      })
    }
    static show(e){
      let el = document.querySelectorAll(e)
      el.forEach(element =>{
        element.style.display = "block"
      })
    }
    static removeClass(e, n){
      let el = document.querySelectorAll(e)
      el.forEach(element =>{
        element.classList.remove(n)
      })
    }
    static addClass(e, n){
      let el = document.querySelectorAll(e)
      el.forEach(element =>{
        element.classList.add(n)
      })
    }
}
class EventDispatcher {
    static on(e, n, cb){
      let el = document.querySelectorAll(e)
      el.forEach(element=>{
        element.addEventListener(n, cb())
      })
    }

}
/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request(a){
    var request = new XMLHttpRequest();
    request.open(a.type, a.url, true);
    request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText;
      a.success(resp)
    } else {
      // a.fail()
    }
  };
    request.onerror = function() {
      a.fail()
    };
    request.send();
  }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
