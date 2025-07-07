//document object model Manipulation
// HTML ke kisi bhi element ko pkdke change krna

## 1.) Selection
```javascript
document.querySelector("#home")

```

## 2.) css Change - we can do multiple
```javascript
home.style.color = "red";
home.style.backgroundColor = "green";
home.style.fontFamily = "arial";
home.style.fontSize = "120px";

```

## 3.)html change - innerHTML me tag ke sath aata hai
```javascript
home.innerHTML = "<i>Hey kaise ho <i/>"

```

## 4.) text-change - textContent me bss text aata hai
```javascript
home.textContent = "achhhaaa";

```

## 5.) addimg listeners
```javascript
home.addEventListener('mouseenter', function(){
    home.style.color = "blue";
})

home.addEventListener('mouseleave', function(){
    home.style.color = "red";
})

```