# Test driven development example

This is my playground for testing different TDD approaches on a use case I encountered in my job. The use case is about asynchronously requesting data from an external API. We send a request (scheduled job) and get the data back on our endpoint. The tricky part is that we can't call the external API, as it's still being prepared. I try to find the most reliable way to tackle such scenarios in software development, especially in NestJS.
