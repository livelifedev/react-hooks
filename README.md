Practice using the react hook system

Notes:
The hook system introduces component level state and some lifecycle methods to function based components. Makes it easy to extract logic from function based components using hooks and turn it into a seperate component to share.

- Class based components notes
    * once a class based component is mounted, even if it is rerendered the componentDidMount method will not get called again
    * componentDidUpdate is the method to use when wanting to run code again when the component is rerendered - but make sure to add a check for prevProps to prevent infinite rerendering when setting state in this method
    * componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) { ...code ...setState } }
- With react hooks the solution to this problem when using useEffect is by passing in an array with a dynamic value as the second argument of the useEffect method. 
    useEffect(() => {fetchResource(resource)}, [resource])
    * everytime the value of the second argument is different from the previous, it calls the arrow function argument
    * if you pass no second argument or a non-array, the arrow function is always called
    * passing in empty array will only call the arrow function once
    * array with newly created objects even if same values are treated as different, so will call arrow function
    * array with same values are treated as same so will not call arrow function
- api request function has to be defined outside of useEffect, or if defined within must be immediately invoked
- The power of hooks is it makes it easy to share logic between components
    - Essentially all that is needed is the resource ("posts" or "todos") as input and resources ("list of resources from api request") as output, and the hook stuff can be extracted and reused
        - resource prop -> Hook Stuff -> resources array