import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCat } from '../actions';

const Cat = (props) => {
    const { cat, isFetching, error } = props;
    useEffect(() => {
        props.dispatch(getCat());
    }, []);

    const handleClick = () => {
        props.dispatch(getCat());
    }
   
    if (error) {
        return <h2>We are having issues: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching a cat for you</h2>
    }

    return (
        <>
            <div>
                <h1>Kitty Time</h1>
                <img src={cat} alt="cat"/>
            </div>
            <button onClick={handleClick}>Find a New Cat</button>
        </>
    )
};

const mapStateToProps = state => {
    return {
        cat: state.cat, 
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Cat);