const o="9aaa7d4cdaaf1b672ccd044d06cb2b7c",s="https://api.themoviedb.org/3",n=async(e,t=1)=>{const a=await fetch(`${s}/search/movie?query=${e}&page=${t}&api_key=${o}`);if(!a.ok)throw new Error("Failed to fetch movies");return(await a.json()).results},r=async()=>{const e=await fetch(`${s}/trending/movie/day?api_key=${o}`);if(!e.ok)throw new Error("Failed to fetch trending movies");return(await e.json()).results},c=async e=>{const t=await fetch(`${s}/movie/${e}?api_key=${o}`);if(!t.ok)throw new Error("Failed to fetch movie details");return await t.json()},d=async e=>{const t=await fetch(`${s}/movie/${e}/credits?api_key=${o}`);if(!t.ok)throw new Error("Failed to fetch movie cast");return(await t.json()).cast},h=async e=>{const t=await fetch(`${s}/movie/${e}/reviews?api_key=${o}`);if(!t.ok)throw new Error("Failed to fetch movie reviews");return(await t.json()).results};export{n as a,c as b,d as c,h as d,r as f};