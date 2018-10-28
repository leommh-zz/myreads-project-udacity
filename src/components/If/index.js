/**
 * @description - Tests a condition
 * @var {string} test - Parameter to be used in the test
 * @var {component} children - Child component    
 * @returns - If the test is valid it will return the component, else it will return false
 */
const If = ({ test, children }) => {
    if (test) {
        return children;
    }else{
        return false;
    }
}

export default If;