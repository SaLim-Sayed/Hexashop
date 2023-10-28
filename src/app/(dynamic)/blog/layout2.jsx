
  function BlogLayout({children}) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
 
  <div>
    <div className="text-xl font-medium text-black">BlogLayout</div>
    <div className="text-slate-500"> {children}</div>
  </div>
</div>
        
       
    
  )
}
