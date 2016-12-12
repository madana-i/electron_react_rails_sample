class NotesController < ApplicationController
  before_action :set_notes
  before_action :set_note, only: [:update, :destroy]

  def index
    render json: { notes: @notes }
  end

  def create
    note = Note.create(note_params)

    render json: { notes: @notes, note: note }
  end

  def update
    @note.update(note_params)

    render json: { notes: @notes, note: @note }
  end

  def destroy
    @note.destroy

    render json: { notes: @notes, note: @note }
  end

  private

  def note_params
    name = params[:content].match(/^(.+)\n=+/)[1]
    { content: params[:content], name: name }
  end

  def set_notes
    @notes = Note.order(name: :asc)
  end

  def set_note
    @note = Note.find(params[:id])
  end
end
