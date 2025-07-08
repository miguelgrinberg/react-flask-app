Hey team,

Could we try adding a NavBar - but we don't want it to detract from the look and feel of the site, so can we stick it at the bottom?

Tushita

## Tips

There's already a pre-made [Navbar](../src/components/NavBar.jsx) in the Components folder. Can you see how you would import it in the [MainPage](../src/pages/MainPage.jsx)?

In the code below, here is an example of adding the NavBar above the text "My First Heading." 

```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <div>
            <NavBar/>
            <h1>My First Heading</h1>
        </div>
    </body>
</html> 
```
