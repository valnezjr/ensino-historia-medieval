(function(root){
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
 function constrain(state,box){const scale=clamp(state.scale,1,8),mx=Math.max(0,(box.imageWidth*scale-box.width)/2),my=Math.max(0,(box.imageHeight*scale-box.height)/2);return {scale,x:clamp(state.x,-mx,mx),y:clamp(state.y,-my,my)}}
 function at(state,next,point){const scale=clamp(next,1,8),ratio=scale/state.scale;return {scale,x:point.x-(point.x-state.x)*ratio,y:point.y-(point.y-state.y)*ratio}}
 function pinch(start,distance,midpoint){const scale=clamp(start.state.scale*distance/start.distance,1,8);return {scale,x:midpoint.x-start.anchor.x*scale,y:midpoint.y-start.anchor.y*scale}}
 const api={clamp,constrain,at,pinch};if(typeof module==='object'&&module.exports)module.exports=api;else root.zoomMath=api;
})(typeof window==='undefined'?globalThis:window);
