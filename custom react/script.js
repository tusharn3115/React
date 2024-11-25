// we want to inject an element like h1 tag so how we think we can do it 
// like we inject h1 tag and add some lorem text and done 

// but in react the way of doing this is very different from what you think, react think everything as an object and inside the object we will specify what we will create 


let customRender = (reactElement, container) => {

    // not optimized code

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);


    // optimized way 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click me to visit google",
}

let mainContainer =  document.getElementById("root");

customRender(reactElement, mainContainer);  // takes 2 perimeter what and where you want to inject