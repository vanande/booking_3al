import io.cucumber.groovy.PendingException

import static io.cucumber.groovy.Hooks.*
import static io.cucumber.groovy.EN.*

When(~/^I POST "([^"]*)" with$/) { String arg1 ->
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException()
}
Then(~/^response status is "([^"]*)"$/) { String arg1 ->
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException()
}
When(~/^I GET "([^"]*)"$/) { String arg1 ->
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException()
}