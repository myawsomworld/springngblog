package myawsom.world.Springngblog.service;

import myawsom.world.Springngblog.Model.Post;
import myawsom.world.Springngblog.dto.PostDto;
import myawsom.world.Springngblog.exception.PostNotFoundException;
import myawsom.world.Springngblog.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class PostService {

    @Autowired
    private AuthService authService;
    @Autowired
    PostRepository postRepository;

    public void createPost(PostDto postDto) {
        Post post = new Post();
        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        User username = authService.getCurrentUser().orElseThrow(() -> new IllegalArgumentException("No User Logged in"));
        post.setUsername(username.getUsername());
        post.setCreated_on(Instant.now());
        postRepository.save(post);

    }

    public List<PostDto> showAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(this::mapFromPostToDto).collect(toList());
    }

    private PostDto mapFromPostToDto(Post post) {
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setContent(post.getContent());
        postDto.setUsername(post.getUsername());
        return postDto;
    }

    public PostDto readSinglePost(Long id){
        Post post = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException("For id" + id));
        return mapFromPostToDto(post);
    }
}
