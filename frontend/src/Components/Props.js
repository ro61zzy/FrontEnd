//Props help you pass data from parent to child
//


// this being your parent component
// you can pass a custom title prop to the Header component
function HomePage() {
    return (
      <div>
        <Header title="React 💙" />
      </div>
    );
  }
  

//then the Header is ofcourse the child
//can accept those props as its first function parameter
//If you console.log() props, you can see that it's an object with a title property.
function Header(props) {
    console.log(props) // { title: "React 💙" }
}

//object property with dot notation
function Header(props) {
    return <h1>{props.title}</h1>;
  }
//Since props is an object, you can use object destructuring to explicitly name the values of props inside your function parameters:
function Header({ title }) {
    console.log(title) // "React 💙"
}
//Then you can replace the content of the <h1> tag with your title variable.
function Header({ title }) {
    console.log(title);
    return <h1>{title}</h1>;
  }

//a template literal
function Header({ title }) {
    return <h1>{`Cool ${title}`}</h1>;
  }

//Your component now accepts a generic title prop which you can reuse in different parts of your application. you just need to change the title
function HomePage() {
    return (
      <div>
        <Header title="React 💙" />
        <Header title="A new title" />
      </div>
    );
  }