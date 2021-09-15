import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state
        const { dispatch, id } = this.props
 
        dispatch(handleAddTweet(text, id))

        this.setState(() => ({
            text: ''
        }))

    }

    render(){

        const {text} = this.state

        {
            // todo: redirect to / if submitted. 
        }

        const tweetLeft = 200 - text.length

        return (
            <div>
               <h3 className='center'>Compoe New Tweet</h3>
               <form className='new-tweet' onSubmit={this.handleSubmit}>

                <textarea 
                    className='text-area'
                    placeholder="What's happening?"
                    value={text}
                    onChange={this.handleChange}
                    maxLength='200'
                />
                {
                    tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )
                }
               <button 
                className='btn' 
                type='submit' 
                disabled={text === ''}
                >
                     Submit
                </button>

               </form>
            </div>
        )
    }
}


export default connect()(NewTweet)