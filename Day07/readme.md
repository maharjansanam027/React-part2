Day07

understanding about useEffect ..

setColor is re rendering the UI.which means function is calling once again

re-render = call the function again

when function will call again once again it will create which means once again memory will allocate to the program.

so thats why const variable will not give error.

new memory will allocate.

const [color,setColor] = useState("black");

in this when setColor will call it will call the parent function.


for primitive datatypes it will upto two time it will call function. its called bailout logically it should not run . it will upto 2 time. if it is same also. 

so, by this way react is optimised. if the backgroound color is red then once again we are calling for red background it will not run. if it is run means it will take memory and it will take cpu time for process. so our website will be slow.
for non primitive datatypes it will check the object reference if it is not change then it will remain same



if the state is change means our component will render. 


