package myawsom.world.Springngblog.repository;

import myawsom.world.Springngblog.Model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
