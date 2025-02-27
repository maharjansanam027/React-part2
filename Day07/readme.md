Day07

understanding about useEffect ..

setColor is re rendering the UI.which means function is calling once again

re-render = call the function again

when function will call again once again it will create which means once again memory will allocate to the program.

so thats why const variable will not give error.

new memory will allocate.

const [color,setColor] = useState("black");

in this when setColor will call it will call the parent function.


