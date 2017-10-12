import React from 'react';
import './index.css';

const Landing = (props) => {
  return (
    <div className="container">
        <div className="card">
          <div className="card-header">
            BELLY SLIDE
          </div>
          <div className="card-block">
            <blockquote className="card-blockquote">
              <p>I once watched my boss belly slide across a long conference room table after he got
                super drunk at an office party. He giggled the whole time while everyone cheered him on,
                and he landed right in front of me, his new assistant, as I walked into the room. The most
                awkward part was watching him sloppily sideways-roll off the table while sheepishly trying
                to tug his shirt down over his very exposed stomach.</p>
            </blockquote>

            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary btn-sm">
                <input type="checkbox" checked autocomplete="off" /> Too Funny!
              </label>
              <label className="btn btn-primary btn-sm">
                <input type="checkbox" autocomplete="off" /> A bit sad
              </label>
              <label className="btn btn-primary btn-sm">
                <input type="checkbox" autocomplete="off" /> Messed up!
              </label>
            </div>

          </div>
        </div>
    </div>
  )
}



export default Landing;
