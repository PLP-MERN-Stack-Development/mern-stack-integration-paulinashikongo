import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import PostList from '../../client/src/context/components/PostList.jsx'
import PostDetail from '../../client/src/context/components/PostDetail.jsx'
import PostForm from '../../client/src/context/components/PostForm.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/edit" element={<PostForm edit />} />
        <Route path="*" element={<div className="container">
          <div className="card"><h3>404</h3><Link to="/">Go Home</Link></div>
        </div>} />
      </Routes>
    </Layout>
  )
}
