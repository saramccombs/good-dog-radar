class ApplicationController < ActionController::API
  # Just a mocked up current_user at this point.
  def current_user
    User.first
  end

  def logged_in?
    !!current_user
  end
end
