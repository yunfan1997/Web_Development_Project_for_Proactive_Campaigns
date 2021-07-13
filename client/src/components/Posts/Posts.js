import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getPosts } from '../../action/post';
import PostItem from './PostItem';
import PostsForm from './PostsForm';

const Posts = ({ getPosts, post: { posts, loading }}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? <Spinner /> : <Fragment>
        <h1>Posts</h1>
        <p className = 'lead'>
            <i className = "fas fa-user" /> Welcome to the community 
        </p>
        <PostsForm />
        <div className='posts'>
            {posts.map(post => (
                <PostItem key = {post._id} post={post} />
            ))}
        </div>
        
        
        </Fragment> 
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
