import jwt from 'jsonwebtoken';

const authMiddleware = (handler) => async (req, res) => {
  if(req && res){
    try {
      const token = req.cookies.token;
  
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
  
      // You can attach the user data to the request for use in protected routes
      req.user = decoded;
  
      // Continue processing the request by calling the provided handler function
      return handler(req, res);
    } catch (error) {
      console.error('Authentication error:', error);
      return res?.status(401).json({ message: 'Unauthorized' });
    }
  }

};

export default authMiddleware;
