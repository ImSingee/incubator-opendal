"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[6983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Vision",sidebar_position:2},i=void 0,l={unversionedId:"vision",id:"vision",title:"Vision",description:"OpenDAL VISION is: access data freely.",source:"@site/docs/vision.md",sourceDirName:".",slug:"/vision",permalink:"/docs/vision",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/vision.md",tags:[],version:"current",lastUpdatedBy:"Mingzhuo Yin",lastUpdatedAt:1694436231,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:2,frontMatter:{title:"Vision",sidebar_position:2},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Services",permalink:"/docs/category/services"}},s={},p=[{value:"1. Free from services",id:"1-free-from-services",level:2},{value:"Examples",id:"examples",level:3},{value:"2. Free from implementations",id:"2-free-from-implementations",level:2},{value:"Examples",id:"examples-1",level:3},{value:"3. Free to integrate",id:"3-free-to-integrate",level:2},{value:"Examples",id:"examples-2",level:3},{value:"4. Free to zero cost",id:"4-free-to-zero-cost",level:2},{value:"Examples",id:"examples-3",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenDAL VISION is: ",(0,a.kt)("strong",{parentName:"p"},"access data freely"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This is an overview of what the shape of OpenDAL looks like, but also somewhat zoomed out, so that the vision can survive while the exact minute details might shift and change over time."),(0,a.kt)("h2",{id:"1-free-from-services"},"1. Free from services"),(0,a.kt)("p",null,"OpenDAL must enable users to access various storage services ranging from ",(0,a.kt)("inlineCode",{parentName:"p"},"s3")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"dropbox")," via its own native API. It should provide a unified API for accessing all these services."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"We"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add support for ",(0,a.kt)("a",{parentName:"li",href:"https://www.google.com/drive/"},"Google Drive"),": It allows users to access and manage their data on the ",(0,a.kt)("a",{parentName:"li",href:"https://www.google.com/drive/"},"Google Drive"),"."),(0,a.kt)("li",{parentName:"ul"},"Add support for ",(0,a.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/object-storage-service"},"Object Storage Service (OSS)")," via native API: Users can utilize Aliyun's RAM support."),(0,a.kt)("li",{parentName:"ul"},"Add support for ",(0,a.kt)("a",{parentName:"li",href:"https://supabase.com/docs/guides/storage"},"supabase storage"),": Users can visit ",(0,a.kt)("inlineCode",{parentName:"li"},"supabase storage")," now!")),(0,a.kt)("p",null,"We don't"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add support for ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage"},"Google Cloud Storage(GCS)")," via ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/xml-api/overview"},"XML API"),": ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage"},"GCS")," has native ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/json_api"},"JSON API")," which more powerful"),(0,a.kt)("li",{parentName:"ul"},"Add support for ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL/PostgreSQL"),": Relational DBMS provides data types such as BLOB, but they are often not used as a storage service.")),(0,a.kt)("h2",{id:"2-free-from-implementations"},"2. Free from implementations"),(0,a.kt)("p",null,"OpenDAL needs to separate the various implementation details of services and enables users to write identical logic for different services."),(0,a.kt)("h3",{id:"examples-1"},"Examples"),(0,a.kt)("p",null,"We"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new capability to indicate whether ",(0,a.kt)("inlineCode",{parentName:"li"},"presign")," is supported: Users can now write logic based on the ",(0,a.kt)("inlineCode",{parentName:"li"},"can_presign")," option."),(0,a.kt)("li",{parentName:"ul"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"default_storage_class")," configuration for the S3 service: Configuration is specific to the S3 service."),(0,a.kt)("li",{parentName:"ul"},"Add an option for ",(0,a.kt)("inlineCode",{parentName:"li"},"content_type")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"write")," operation: It aligns with HTTP standards.")),(0,a.kt)("p",null,"We don't"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new option in read for ",(0,a.kt)("inlineCode",{parentName:"li"},"storage_class"),": As different services could have varying values for this parameter.")),(0,a.kt)("h2",{id:"3-free-to-integrate"},"3. Free to integrate"),(0,a.kt)("p",null,"OpenDAL needs to be integrated with different systems."),(0,a.kt)("h3",{id:"examples-2"},"Examples"),(0,a.kt)("p",null,"We"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add python binding: users from ",(0,a.kt)("inlineCode",{parentName:"li"},"python")," can use OpenDAL."),(0,a.kt)("li",{parentName:"ul"},"Add object_store integration: users of ",(0,a.kt)("inlineCode",{parentName:"li"},"object_store")," can adopt OpenDAL.")),(0,a.kt)("h2",{id:"4-free-to-zero-cost"},"4. Free to zero cost"),(0,a.kt)("p",null,"OpenDAL needs to implement features in zero cost way which means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Users don't need to pay cost for not used features."),(0,a.kt)("li",{parentName:"ul"},"Users can't write better implementation for used features.")),(0,a.kt)("h3",{id:"examples-3"},"Examples"),(0,a.kt)("p",null,"We"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"layer")," support: Users can add logging/metrics/tracing in zero cost way."),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"seek")," for Reader: Users can't write better ",(0,a.kt)("inlineCode",{parentName:"li"},"seek")," support, they all need to pay the same cost.")),(0,a.kt)("p",null,"We don't"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"Arc")," for metadata: Users may only need to use metadata once and never clone it. For those who do want this feature, they can add ",(0,a.kt)("inlineCode",{parentName:"li"},"Arc")," themselves.")))}u.isMDXComponent=!0}}]);