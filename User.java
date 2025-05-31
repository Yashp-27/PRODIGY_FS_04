@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password; // Store hashed!
    // Getters, setters
}
