The Chrome team has made a number of performance-related improvements to the implementation of IndexedDB (IDB). One such improvement has been to move the backing store of each instance to a separate sequence (you can think of this roughly as a separate thread). What this means is that concurrent use of IDB is now faster, either from the same site, or from cross-site. This post gives all the details, and explains what you need to do to take advantage of this move, which is available from Chrome 126.

![Sample Image](/notes/indexed-db-performance/images/thumbnail.png)

### Cross-site

If your use of IDB is cross-site, you don't need to do anything. Once this browser-level move has happened, and the backing store of each IDB instance is moved to a separate sequence, the performance win comes without you having to do anything.

### Same-site

To get this performance enhancement for same-site usage, you need to segregate your IDB usage into different instances, that is, [storage buckets.]() The following code sample shows how this can work:

### Browser support

The performance gain mentioned in this post is a progressive enhancement that you can make use of when the Storage Buckets API is supported in your browser (from Chrome 122) and when the IDB instances are sharded, from Chrome 126.

### Demo

Check out the demo of this feature on Glitch. The source code shows the concept from the previous code snippet in action. Be sure to carefully follow the instructions in the demo. If you inspect the IDB instances with Chrome DevTools, you can see the used storage bucket in the section Bucket name, highlighted with a red box in the following screenshot.

### Hide irrelevant tracks

Check out the demo of this feature on Glitch. The source code shows the concept from the previous code snippet in action. Be sure to carefully follow the instructions in the demo. If you inspect the IDB instances with Chrome DevTools, you can see the used storage bucket in the section Bucket name, highlighted with a red box in the following screenshot.

Check out the demo of this feature on Glitch. The source code shows the concept from the previous code snippet in action. Be sure to carefully follow the instructions in the demo. If you inspect the IDB instances with Chrome DevTools, you can see the used storage bucket in the section Bucket name, highlighted with a red box in the following screenshot.

Check out the demo of this feature on Glitch. The source code shows the concept from the previous code snippet in action. Be sure to carefully follow the instructions in the demo. If you inspect the IDB instances with Chrome DevTools, you can see the used storage bucket in the section Bucket name, highlighted with a red box in the following screenshot.

Check out the demo of this feature on Glitch. The source code shows the concept from the previous code snippet in action. Be sure to carefully follow the instructions in the demo. If you inspect the IDB instances with Chrome DevTools, you can see the used storage bucket in the section Bucket name, highlighted with a red box in the following screenshot.

Check out the demo of this feature on Glitch. The source code shows the concept from the previous code snippet in action. Be sure to carefully follow the instructions in the demo. If you inspect the IDB instances with Chrome DevTools, you can see the used storage bucket in the section Bucket name, highlighted with a red box in the following screenshot.

Check out the demo of this feature on Glitch. The source code shows the concept from the previous code snippet in action. Be sure to carefully follow the instructions in the demo. If you inspect the IDB instances with Chrome DevTools, you can see the used storage bucket in the section Bucket name, highlighted with a red box in the following screenshot.

### Related links

- [Not all storage is created equal: introducing Storage Buckets]()
- [Draft specification]()
- [Explainer]()
- [Acknowledgements]()
- [This post was reviewed by Evan Stade and Rachel Andrew.]()
