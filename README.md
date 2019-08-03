Practice using the react hook system

Notes:
- Class based components notes
    * once a class based component is mounted, even if it is rerendered the componentDidMount method will not get called again
    * componentDidUpdate is the method to use when wanting to run code again when the component is rerendered - but make sure to add a check for prevProps to prevent infinite rerendering when setting state in this method
    * componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) { ...code ...setState } }


