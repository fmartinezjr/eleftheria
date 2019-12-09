**Run locally:** \
npm install \
cd client && npm install \
cd .. 
npm run dev 



**Run using Docker** \
cd client \
npm run build \
move build folder to main repo folder \
docker build -t [SOURCE_IMAGE]  . 

View locally \
docker run -p 8080:8080 [SOURCE_IMAGE]  

Tag the local image \
docker tag [SOURCE_IMAGE] [HOSTNAME]/[PROJECT-ID]/[IMAGE] 
 
Push the image \
docker push [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] 

