# Architecture

This implementation is focused on SOLID principles in the context of a 3-6 hours deadline. I tried to find a good tunning between functionality and quality. There are a couple of things that need to be improved.

The main point of my solution is the separation of concerns between Notes (sticky notes) and Draggable things. My approach focuses on the fact that the drag and drop functionality must be intependent of the final client allowing to implement new types of notes without dealing with positioning of objects.

Basically we have 3 main features.

## Draggable

Which implements the low level drag functionality, and exposes a **DraggableModel** interface to allow extension, a **Draggable component** that encapsulates de drag logic and some calculations related to it, and a **DraggableContainer component** which brings default configuration to override the browser's default drag behaviour. 

## DropZone
A component that deals with drop logic and allows to add any content to it, and define what should happen when somethin's dropped on it

## Note
The final client. A specification of Draggable that uses all the mentioned features. The interesting point here is that none of the Note artifacts know how position, drag or drop anything.

# How to run the project

This project was generated with Vite. I'm pretty familiar with it so I thought it would make things faster. To run it:

    npm i && npm run dev

This will install the required dependencies and start a dev server on port 3000.

# Implemented features

## Required

- Create a new note of the specified size at the specified position.
- Change note size by dragging. (*)
- Move a note by dragging.
- Remove a note by dragging it over a predefined "trash" zone.

## Bonus

1. Entering/editing note text. (**)
2. Moving notes to front (in case of overlapping notes).
3. Saving notes to local storage (restoring them on page load).
4. Different note colors.

_(*) Resize is implemented natively but not being updated in Model. So when a resized note is persisted, all changes in size are lost. This is definitely a point of improvement._
_(**) Editing a note once it has been created is not implemented_ 
# Not implemented (yet)

5. Saving notes to REST API. Note: you're not required to implement the API, you
can mock it, but the mocks should be asynchronous.

I ran out of time, so I decided to review my code instead of add this funcionality. I would have used json-server or something like that and fetch API or Axios to perform requests. I honestly think that its a really easy feature to implement once LocalStorage is working.

# Good to know

The project comes with a preconfigured list of 3 notes initially. Also clearing localStorage "notes" key defaults to these 3 notes.