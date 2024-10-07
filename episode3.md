- `npm run start` to start the app/server.
- start, build can be found in scripts in package.json
- start => parcel index.html
- build => parcel build index.html

# React Element
const heading = (<h1 className="head"> I am Sarath</h1>);


# React Function component
# React FC should start with capital letter
const Headingcomponent = ()=> (
    <div>
        <h1> This is functional component</h1>
    </div>
)



# For rendering react functional components
root.render(<Headingcomponent />);



# component composition is placing a FC in another FC. example is below
const Title = () => (<h1 className="head"> I am Sarath</h1>);
const Headingcomponent = ()=> (
    <div>
        <Title />
        <h1> This is functional component</h1>
    </div>
);



# we can write js code in angular bracets in react functional component and also in react elements too.
const Headingcomponent = ()=> (
    <div>
        {title}
        <h1> This is functional component</h1>
    </div>
);


# so basically we can keep component in Element and vice versa too.


# eventhough if we got malcious data from any api and we pass it as js code in any react ele or comp, it cares of it.


//<Title /> is same as <Title> </Title>
//and also we can write as {Title()}
