import "./rightBar.scss";
import ClearIcon from '@mui/icons-material/Clear';

const RightBar = () => {
  return <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You </span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons" >
                <button>follow</button>
                <button><ClearIcon/></button>
              </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons" >
                <button>follow</button>
                <button><ClearIcon/></button>
              </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
                <span>Jane Doe</span> changed theit cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
                <span>Jane Doe</span> changed theit cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
                <span>Jane Doe</span> changed theit cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
                <span>Jane Doe</span> changed theit cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress& cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Jane Doe</span> 
            </div>
          </div>
        </div>
    </div>
  </div>;
};

export default RightBar;
