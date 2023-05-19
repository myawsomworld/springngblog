package myawsom.world.Springngblog.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;


@Data
@AllArgsConstructor
public class AuthenticationResponse {
     private String authenticationToken;
     private String username;


//    public AuthenticationResponse(String authenticationToken, String username) {
//
//    }
}
