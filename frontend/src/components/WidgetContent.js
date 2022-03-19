import React from 'react'
import './css/WidgetContent.css'

function WidgetContent() {
  return (
    <div className='widget__contents'>
        <div className='widget__content'>
            <img src='https://www.vanisd.org//cms/lib/TX02202941/Centricity/Domain/2347/skyward%20family%20access%20icon.png' alt='' />
            <div className='widget__contentTitle'>
                <h5>Fix Your English</h5>
                <p>A space for English learners, fix your grammar, vocabulary and spoken English</p>
            </div>
        </div>
        <div className='widget__content'>
            <img src='data:image/png;base64,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' alt='' />
            <div className='widget__contentTitle'>
                <h5>Salesforce World</h5>
                <p> Everything related to Salesforce.com CRM and technology</p>
            </div>
        </div>
        <div className='widget__content'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png' alt='' />
            <div className='widget__contentTitle'>
                <h5>Python Coding</h5>
                <p>Learn PYTHON Tips and Tricks I Share your knowledge with us to help the society</p>
            </div>
        </div>
        <div className='widget__content'>
            <img src='https://yt3.ggpht.com/ytc/AKedOLRA9H963jFZZF-w7cRJf6pV2l51trpu0mHCwNa-lw=s900-c-k-c0x00ffffff-no-rj' alt='' />
            <div className='widget__contentTitle'>
                <h5>Programmer's World</h5>
                <p>You still a programmer? You still write code? This space is for you.</p>
            </div>
        </div>
        <div className='widget__content'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCbxJddUNM7HNt4XPjtlJSTd5RAmuccWqsA&usqp=CAU' alt='' />
            <div className='widget__contentTitle'>
                <h5>Indian History</h5>
                <p>Space dedicated to Indian History : from the ancient to the modern.</p>
            </div>
        </div>
        <div className='widget__content'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbV0HL-ixgQ_w8uSG-iOJmxtV328wUSzo1A&usqp=CAU' alt='' />
            <div className='widget__contentTitle'>
                <h5>Data Structures</h5>
                <p>Group for Data Structures and Algorithms concepts and Questions</p>
            </div>
        </div>
        <div className='widget__content'>
            <img src='https://5.imimg.com/data5/EP/EC/GLADMIN-41070836/cs-stem-based-education-solutions-250x250.jpg' alt='' />
            <div className='widget__contentTitle'>
                <h5>Positivity Inside</h5>
                <p>A space, with the warmth of positive vibes</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent